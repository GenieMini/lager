// components/Stock.tsx
import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import productModel from "../models/products";
import { Base, Typog } from '../styles';

function StockList({products, setProducts}: any) {
  useEffect(async () => {
    setProducts(await productModel.getProducts());
  }, []);

  const list = products.map((product: any, index: any) => {
    return <Text
            key={index}
            style={{ ...Typog.normal }}
            >
              { product.name } - { product.stock }
            </Text>
  });

  return (
    <View>
      {list}
    </View>
  );
}

export default function Stock({products, setProducts}: any) {
  return (
    <View style={Base.textBox}>
      <Text style={{color: 'cyan', fontSize: 24}}>Lagerförteckning</Text>
      <StockList products={products} setProducts={setProducts}/>
    </View>
  );
}