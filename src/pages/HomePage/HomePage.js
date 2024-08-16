import React, { useEffect, useState } from "react";
import axios from "../../services/axiosConfig";
import { Container, Typography, Grid } from "@mui/material";
import ModelSpace from "../../components/ModelSpace/ModelSpace";
import HomePageSkeleton from "../../components/Skeletons/HomePageSkeleton";
import ErrorHandler from "../../components/ErrorHandler/ErrorHandler";
import "./HomePage.scss";

const HomePage = () => {
  const [modelSpaces, setModelSpaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchModelSpaces = async () => {
    setError(null);
    try {
      const response = await axios.get("/model-spaces");
      setModelSpaces(response.data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchModelSpaces();
  }, []);

  if (loading)
    return (
      <div>
        <HomePageSkeleton limit={3} />
      </div>
    );
  if (error)
    return (
      <div>
        <ErrorHandler
          error={error}
          action={fetchModelSpaces}
          actionTitle="Reload"
        />
      </div>
    );

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Model Spaces
      </Typography>
      <Grid container spacing={3}>
        {modelSpaces.map((space) => (
          <ModelSpace key={space.id} space={space} />
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
