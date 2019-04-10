import React, { Component } from '../../node_modules/react'
import NotificationItem from './NotificationItem'
import PropTypes from 'prop-types';

export class Notifications extends Component {
  
    render() {
      return this.props.Notifications.map((notif) => (
        <NotificationItem key={notif.id} notif={notif}/>
    )) ;
 }
}
Notifications.propTypes ={
  Notifications: PropTypes.array.isRequired
}

export default NotificationItem
