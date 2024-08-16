import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../services/axiosConfig";
import { Container, Typography, Button, Grid } from "@mui/material";
import CardHeader from "../../components/CardHeader/CardHeader";
import ModelSpacePageSkeleton from "../../components/Skeletons/ModelSpacePageSkeleton";
import { inputForm } from "../../components/InputForm/InputForm";
import "./ModelSpacePage.scss";
import { transformInput } from "../../utils/finalOutput";
import { outputModal } from "../../components/OutputModel/OutputModel";
import { validateForm } from "../../utils/validateForm";
import ErrorHandler from "../../components/ErrorHandler/ErrorHandler";

const ModelSpacePage = () => {
  const { id } = useParams();
  const [modelSpace, setModelSpace] = useState(null);
  const [inputs, setInputs] = useState({});
  const [outputs, setOutputs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [predicting, setPredicting] = useState(false);
  const [error, setError] = useState(null);
  const [predictOutput, setPredictOutput] = useState([]);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const fetchModelSpaceDetails = async () => {
      try {
        const response = await axios.get(`/model-spaces/${id}`);
        setModelSpace(response.data.data);
        const initialInputs = response.data.data.inputs.reduce((acc, input) => {
          acc[input.name] = input.default || "";
          return acc;
        }, {});
        setInputs(initialInputs);
        setOutputs(response.data.data.outputs);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchModelSpaceDetails();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, type, files, value } = event.target;
    if (type === "file") {
      handleFileUpload(name, files[0]);
    } else {
      setInputs({ ...inputs, [name]: value });
    }
    setFormErrors({ ...formErrors, [name]: false });
  };

  const handleFileUpload = (name, file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64File = reader.result.split(",")[1];
      setInputs((prevInputs) => ({ ...prevInputs, [name]: base64File }));
    };
    reader.readAsDataURL(file);
  };

  const handlePredict = async () => {
    if (!validateForm(modelSpace, setFormErrors, inputs)) return;

    setPredicting(true);
    try {
      const response = await axios.post(`/model-spaces/${id}/predict`, inputs);
      const data = response.data.data;
      setPredictOutput(transformInput(structuredClone(outputs), data));
    } catch (err) {
      setError(err.message);
    } finally {
      setPredicting(false);
    }
  };

  if (loading) return <ModelSpacePageSkeleton limit={6} />;
  if (error)
    return (
      <div>
        <ErrorHandler error={error} />
      </div>
    );

  return (
    <Container>
      {modelSpace && (
        <>
          <CardHeader name={modelSpace.name} avatar={modelSpace.avatar} />
          <Typography variant="body2" paragraph>
            {modelSpace.description}
          </Typography>
          <Grid container spacing={3}>
            {modelSpace.inputs.map((input) => {
              return inputForm(input, inputs, handleInputChange, formErrors);
            })}
          </Grid>
          <div className="predict-btn">
            <Button
              variant="contained"
              color="primary"
              onClick={handlePredict}
              disabled={predicting}
            >
              {predicting ? "Predicting..." : "Predict"}
            </Button>
          </div>
          {!!predictOutput.length && (
            <div>
              <Typography variant="h6">Outputs:</Typography>
              <Grid container spacing={3}>
                {predictOutput.map((item) => {
                  return outputModal(item);
                })}
              </Grid>
            </div>
          )}
        </>
      )}
    </Container>
  );
};

export default ModelSpacePage;
