import React, { Fragment } from 'react';
import Exception from 'ant-design-pro/lib/Exception';
import { Button } from 'antd';

const actions = (
  <Fragment>
    <Button type="primary">Home</Button>
    <Button>Detail</Button>
  </Fragment>
);

const Exception403 = () => (
    <Exception
        type="403"
        desc="Sorry, you don't have access to this page."
        actions={actions}
    />
);

export default Exception403;
