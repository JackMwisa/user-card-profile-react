import React from "react";
import { Card, CardContent, Typography, Avatar, CardActionArea } from "@mui/material";

const UserCard = ({ name, description, image, onClick }) => {
  return (
    <Card sx={{ maxWidth: 345, mx: "auto", boxShadow: 3 }}>
      <CardActionArea onClick={onClick} disabled={!onClick}>
        <CardContent sx={{ textAlign: "center" }}>
          <Avatar
            src={image}
            alt={name}
            sx={{ width: 80, height: 80, mx: "auto", mb: 2 }}
          />
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default UserCard;
