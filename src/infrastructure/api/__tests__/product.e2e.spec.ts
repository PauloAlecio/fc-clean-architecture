import { app, sequelize } from "../express";
import request from "supertest";
import Product from "../../../domain/product/entity/product";
import ProductRepository from "../../../infrastructure/product/repository/sequelize/product.repository";

describe("E2E test for product", () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it("should list all products", async () => {
    const productRepository = new ProductRepository();

    const product1 = new Product("1", "Product A", 100);
    const product2 = new Product("2", "Product B", 200);

    await productRepository.create(product1);
    await productRepository.create(product2);

    const response = await request(app).get("/product").send();

    expect(response.status).toBe(200);
    expect(response.body.products.length).toBe(2);
    expect(response.body.products[0].id).toBe("1");
    expect(response.body.products[0].name).toBe("Product A");
    expect(response.body.products[0].price).toBe(100);
    expect(response.body.products[1].id).toBe("2");
    expect(response.body.products[1].name).toBe("Product B");
    expect(response.body.products[1].price).toBe(200);
  });
});
