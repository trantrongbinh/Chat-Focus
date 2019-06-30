import React, { Fragment } from 'react';
import Exception from 'ant-design-pro/lib/Exception';
import { Button } from 'antd';

const actions = (
  <Fragment>
    <Button type="primary">Home</Button>
  </Fragment>
);

const Exception404 = () => (
    <Exception
        type="404"
        desc="Sorry, the page you visited does not exist."
        actions={actions}
    />
);

export default Exception404;
