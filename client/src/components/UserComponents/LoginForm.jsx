import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";

// Iniciar seccion con cuenta ya creada
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const Login = () => (
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Nombre de usuario"
      name="username"
      rules={[
        {
          required: true,
          message: "Ingrese un usuario",
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Contraseña"
      name="password"
      rules={[
        {
          required: true,
          message: "Ingrese una contraseña",
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Recordar contraseña</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <br></br>
      <Link to="/reset">¿Olvidaste tu contraseña?</Link>
      <br></br>
      <Link to="/signup"> Si no posees una cuenta hacé click aquí</Link>
      <br></br>
      <Button type="primary" htmlType="submit">
        Iniciar seccion con google
      </Button>
      <br></br>
      <Button type="primary" htmlType="submit">
        Ingresar
      </Button>
    </Form.Item>
  </Form>
);
export default Login;
