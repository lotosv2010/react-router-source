import React from 'react';
import {useParams, useHistory, useLocation} from '../lib/react-router-dom';

function Post() {
  const {title} = useParams();
  const history = useHistory();
  const location = useLocation();
  return (
    <div>
      <p>title:{title}</p>
      <p>location:{JSON.stringify(location, null, 2)}</p>
      <button onClick={() => history.push('/')}>去首页</button>
    </div>
  );
}

export default Post;
