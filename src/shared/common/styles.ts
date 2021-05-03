import styled from 'styled-components';
import {
  flexbox,
  space,
  layout,
  LayoutProps,
  SpaceProps,
  FlexboxProps,
  compose,
} from 'styled-system';
import { Input, Form } from 'antd';
import logo from '../../assets/images/logo.png';

interface ContentProps extends FlexboxProps, SpaceProps, LayoutProps {}

export const Cover = styled.div`
  width: calc(100vw - 20px);
  height: calc(100vh - 60px);
  background-color: #fff;
  padding: 30px 5px;
  margin: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  height: calc(100vh - 60px);
  margin: auto;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  max-width: 1024px;
  flex: 1;
  align-items: stretch;
`;

export const LogoImage = styled.img.attrs(() => ({
  src: logo,
}))`
  max-width: 450px;
  width: 220px;
  height: auto;
  margin: 0 auto 20px auto;
`;

export const SearchForm = styled(Form)`
  display: flex;
  align-self: stretch;
`;

export const FormItem = styled(Form.Item)`
  display: flex;
  align-self: stretch;
  width: 100%;
`;

export const Search = styled(Input.Search)`
  display: flex;
  align-self: stretch;
  width: 100%;
`;

export const Content = styled.div<ContentProps>`
  max-width: 500px;
  margin: 0 auto;
  padding: 35px;
  ${compose(flexbox, space, layout)}
`;

export const PageTitle = styled.h1`
  color: black;
  font-size: 2.8em;
`;

export const CenteredRow = styled.div`
  display: flex;
  align-self: stretch;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  a {
    margin-right: 15px;
    margin-left: 15px;
    font-size: 1.3rem;
  }
`;
