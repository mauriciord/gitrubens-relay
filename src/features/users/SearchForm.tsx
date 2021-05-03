import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { List, Avatar, AutoComplete } from 'antd';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { iRootState, Dispatch } from '../../state/store';
import { User } from '../../state/users/types';
import {
  Cover,
  Wrapper,
  Search,
  SearchForm as Form,
  FormItem,
} from '../../shared/common/styles';
import { SearchQuery } from '../../state/searchHistory/types';
import Logo from '../../shared/common/Logo';

type Options = {
  value: SearchQuery;
};

const searchFormSchema = Yup.object().shape({
  query: Yup.string()
    .min(2, 'Too Short!')
    .required('This field cannot be empty'),
});

const SearchForm = () => {
  const userListIds = useSelector((state: iRootState) => state.users.result);
  const userList: User[] = useSelector(
    (state: iRootState) => state.users.entities.users
  );
  const options: Options[] = useSelector((state: iRootState) =>
    state.searchHistory.map((value: string) => ({ value }))
  );
  const dispatch = useDispatch<Dispatch>();
  const form = useFormik({
    initialValues: {
      query: '',
    },
    validationSchema: searchFormSchema,
    onSubmit: ({ query }) => {
      dispatch.users.searchUserByQuery(query);
    },
  });

  return (
    <Cover>
      <Wrapper>
        <Logo />
        <Form layout="vertical">
          <FormItem
            validateStatus={form.errors?.query && 'error'}
            help={form.errors?.query}
          >
            <AutoComplete
              value={form.values.query}
              style={{ width: '100%' }}
              options={options}
              onSelect={(value: string) => form.setFieldValue('query', value)}
            >
              <Search
                name="query"
                onChange={form.handleChange}
                placeholder="input a github username"
                enterButton="Search"
                size="large"
                onSearch={() => form.handleSubmit()}
              />
            </AutoComplete>
          </FormItem>
        </Form>
        {userListIds && userListIds.length > 0 && (
          <List
            itemLayout="horizontal"
            dataSource={userListIds}
            bordered
            renderItem={(id: number) => (
              <List.Item key={`search-list-profile-${id}`}>
                <Link to={`/profile/${userList[id].login}`}>
                  <List.Item.Meta
                    avatar={<Avatar src={userList[id].avatar_url} />}
                    title={userList[id].login}
                    description={userList[id].url}
                  />
                </Link>
              </List.Item>
            )}
          />
        )}
      </Wrapper>
    </Cover>
  );
};

export default SearchForm;
