import * as Yup from "yup";

export const createUserValidationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters")
    .max(50, "Username must be less than or equal to 50 characters"),

  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address")
    .max(100, "Email must be less than or equal to 100 characters"),

  password: Yup.string()
    .required("Password is required")
    .min(5, "Password must be at least 5 characters")
    .max(100, "Password must be less than or equal to 100 characters"),
});

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Debe ser un email válido")
    .required("El email es obligatorio"),
  password: Yup.string()
    .required("La contraseña es obligatoria")
});

export const createProductValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("El nombre del producto es obligatorio")
    .min(3, "El nombre debe tener al menos 3 caracteres"),
  description: Yup.string().required("La descripción es obligatoria"),
  category: Yup.string().required("La categoría es obligatoria"),
  priceArs: Yup.number()
    .required("El precio en ARS es obligatorio")
    .positive("El precio debe ser positivo"),
  priceUsd: Yup.number()
    .required("El precio en USD es obligatorio")
    .positive("El precio debe ser positivo"),
  stock: Yup.number()
    .required("El stock es obligatorio")
    .integer("El stock debe ser un número entero")
    .min(0, "El stock no puede ser negativo"),
  code: Yup.string(),
  imei: Yup.string().length(15, "El IMEI debe tener 15 caracteres"),
});