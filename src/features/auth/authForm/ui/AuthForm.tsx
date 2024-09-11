"use client"

import { useAuthUserMutation } from '@/src/shared/api/auth/authApi';
import { TLoginData } from '@/src/shared/interfaces/user';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const AuthForm = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
  
    const [isButtonDisable, setButtonDisable] = useState<boolean>(false);
  
    const router = useRouter();
  
    const errorMassage = () => {
      messageApi.open({
        type: 'error',
        content: 'Неправильный логин или пароль',
      });
    };
    const successMassage = () => {
      messageApi.open({
        type: 'success',
        content: 'Вы авторизованны',
      });
    };
  
    useEffect(() => {
      setButtonDisable(true);
    }, []);
  
    const [loginUser, { isLoading, isError, error }] = useAuthUserMutation();
  
    const handleLoginFinish = async (values: TLoginData) => {
      const res = await loginUser(values);
  
      if ('error' in res) {
        errorMassage();
        form.setFields([
          {
            name: 'password',
            errors: ['Неправильный логин или пароль'],
          },
          {
            name: 'login',
            errors: ['Неправильный логин или пароль'],
          },
        ]);
      } else if ('data' in res) {
        successMassage();
        form.resetFields();
        localStorage.setItem('token', res.data.accessToken);
        router.push('/groups');
      }
    };
  
    return (

      <section className='w-80'>
        {contextHolder}
        
        <Form
          form={form}
          name="login"
          layout="vertical"
          onFinish={handleLoginFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Обязательное поле' }]}
          >
            <Input
              placeholder="Имя пользователя"
              size="large"
              prefix={<UserOutlined />}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Обязательное поле' }]}
          >
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
                style={{ width: '100%' }}
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
}

export default AuthForm

