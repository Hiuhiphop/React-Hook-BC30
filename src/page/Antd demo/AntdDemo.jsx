import { Button, DatePicker } from "antd";
import React from "react";

export default function AntdDemo() {
  return (
    <div className="container">
      AntdDemo
      <div>
        <DatePicker />
        <Button type="block" size="large">Click me</Button>
      </div>
    </div>
  );
}
