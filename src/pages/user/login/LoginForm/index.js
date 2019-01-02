import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import { connect } from 'dva'

const FormItem = Form.Item
@connect(({ user }) => ({ user }))
class LoginFormComponent extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    const { form, dispatch } = this.props
    form.validateFields((error, values) => {
      if (!error) {
        dispatch({
          type: 'user/LOGIN',
          payload: values,
        })
      }
    })
  }

  render() {
    const {
      form,
      user: { fetching },
    } = this.props
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item label="Email">
                      {form.getFieldDecorator('email', {
                        initialValue: 'admin@mediatec.org',
                        rules: [{ required: true, message: 'Please input your e-mail address' }],
                      })(<Input size="default" />)}
        </Form.Item>
        <FormItem label="Password">
          {form.getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </FormItem>
        <FormItem>
          {form.getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a
            className="login-form-forgot pull-right text-primary"
            style={{ lineHeight: '36px' }}
            href="javascript: void(0);"
          >
            Forgot password?
          </a>
        </FormItem>
        <div className="form-actions">
          <Button type="primary" htmlType="submit" className="login-form-button">
            Sign in
          </Button>
          <span className="ml-3 register-link">
            <a href="javascript: void(0);" className="text-primary utils__link--underlined">
              Register
            </a>{' '}
            if you don&#39;t have account
          </span>
        </div>
        <div className="form-group">
          <p>Use another service to Log In</p>
          <div className="mt-2">
            <a href="javascript: void(0);" className="btn btn-icon mr-2">
              <i className="icmn-facebook" />
            </a>
            <a href="javascript: void(0);" className="btn btn-icon mr-2">
              <i className="icmn-google" />
            </a>
            <a href="javascript: void(0);" className="btn btn-icon mr-2">
              <i className="icmn-windows" />
            </a>
            <a href="javascript: void(0);" className="btn btn-icon mr-2">
              <i className="icmn-twitter" />
            </a>
          </div>
        </div>
      </Form>
    )
  }
}

const LoginForm = Form.create()(LoginFormComponent)
export default LoginForm
