import React from "react";
import "./Notification.css";

export default function Notifications(props) {
  return (
    <div className="notification-section">
      <div className="notification-section-center">
        <section className="notification_message">
          <h1 className="logo logo-chat">
            Dev<span className="logo-extend logo-extend_banner ">Juniors</span>
          </h1>
        </section>
        <section className="notification_render">{props.Section}</section>
      </div>
    </div>
  );
}
