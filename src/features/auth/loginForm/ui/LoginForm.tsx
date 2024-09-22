"use client";

import { useLoginUserMutation } from "@/src/shared/api/user/loginUserApi";
import { ILoginUser } from "@/src/shared/interfaces/user";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const LoginForm = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();

  const [isButtonDisable, setButtonDisable] = useState<boolean>(false);

  const router = useRouter();

  const errorMassage = () => {
    messageApi.open({
      type: "error",
      content: "Неправильный логин или пароль",
    });
  };
  const successMassage = () => {
    messageApi.open({
      type: "success",
      content: "Вы авторизованны",
    });
  };

  useEffect(() => {
    setButtonDisable(true);
  }, []);
  const searchParams = useSearchParams();

  const [loginUser, { isLoading, isError, error }] = useLoginUserMutation();

  const handleLoginFinish = async (values: ILoginUser) => {
    const res = await loginUser(values);

    console.log("res", res);
    console.log(values);

    const formData = new FormData();

    formData.append("login", values.login);
    formData.append("password", values.password);

    const callbackUrl = searchParams.get("callbackUrl") || "/profile";

    if ("error" in res) {
      errorMassage();
      form.setFields([
        {
          name: "password",
          errors: ["Неправильный логин или пароль"],
        },
        {
          name: "login",
          errors: ["Неправильный логин или пароль"],
        },
      ]);
    } else if ("data" in res) {
      successMassage();

      await signIn("credentials", {
        email: formData.get("login"),
        password: formData.get("password"),
        redirect: false,
        callbackUrl: callbackUrl,
      });
      router.push(callbackUrl);

      form.resetFields();
    }
  };

  return (
    <section className="w-80">
      {contextHolder}

      <Form form={form} name="login" layout="vertical" onFinish={handleLoginFinish}>
        <Form.Item name="login" rules={[{ required: true, message: "Обязательное поле" }]}>
          <Input placeholder="Имя пользователя" size="large" prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: "Обязательное поле" }]}>
          <Input.Password
            placeholder="Пароль"
            size="large"
            prefix={<LockOutlined className="site-form-item-icon" />}
          />
        </Form.Item>
        <Form.Item shouldUpdate noStyle>
          {() => (
            <Button
              type="primary"
              style={{ width: "100%" }}
              size="large"
              htmlType="submit"
              // loading={isLoading}
            >
              Войти
            </Button>
          )}
        </Form.Item>
      </Form>
    </section>
  );
};

export default LoginForm;
