import { notification } from 'antd';

const Notification = (type,title,msj) => notification[type]({
  message: title,
  description:msj,
});

export default Notification;