import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, CardActions, Box } from "@mui/material";
import { fCurrencyVND } from "../../../utils/formatNumber";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../app/redux/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    const handleViewDetails = () => {
        navigate(`/products/${product.id}`);
    };
    const imageUrl = product?.product.image?.content
        ? "data:image/jpeg;base64," + product?.product.image?.content
        : "/path/to/default-image.png";

    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={imageUrl}
                alt={product?.product?.name}
                sx={{ objectFit: "contain" }}
            />
            <CardContent sx={{ paddingBottom: 0 }}>
                <Typography gutterBottom variant="h6" component="div" noWrap>
                    {product?.product?.name}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                        {product.size}g
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {fCurrencyVND(product.price)}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between', padding: 2 }}>
                <Button variant="contained" size="small" onClick={handleAddToCart}>Thêm vào giỏ hàng</Button>
                <Button variant="outlined" size="small" onClick={handleViewDetails}>Xem chi tiết</Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
