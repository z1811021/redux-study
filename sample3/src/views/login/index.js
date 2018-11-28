import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { updateReducer2action } from './passwordActions.js';
import  { updateReducer1action } from './usernameActions.js';
import { Form, Icon, Input, Button, message } from 'antd';
import './index.scss';
const FormItem = Form.Item;


class AppLogin extends Component {
  constructor(props) {
    super(props);
    this.onUpdatePassword = this.onUpdatePassword.bind(this)
    this.onUpdateUsername = this.onUpdateUsername.bind(this)
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        if (values.userName === 'admin' && values.password === 'test'){
          message.success('login successful');
        } else {
          message.error('login unsuccessful');
        }
      }
    });
  }
  onUpdatePassword(e){
    this.props.onUpdatePassword(e.target.value);
  }
  onUpdateUsername(e){
    this.props.onUpdateUsername(e.target.value);
  }
  componentDidUpdate(){
    console.log(this.props)
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="App">
        <div className="container">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input  onChange={this.onUpdateUsername} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input onChange={this.onUpdatePassword} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({  //ES6中箭头函数返回对象 第一个参数将state传递给props 
  username:state.reducer1,
  password:state.reducer2
})

const mapActionsToProps = {
  onUpdatePassword: updateReducer2action,
  onUpdateUsername: updateReducer1action
}   //第二个参数将所有的action创建的函数传到组件同名属性，无须使用dispatch直接使用prsps调用

const App = Form.create()(AppLogin);
export default connect(mapStateToProps,mapActionsToProps)(App);  

