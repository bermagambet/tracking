import React from "react";

import { Input, Space, Card, Descriptions, Button } from "antd";
import {
  HomeOutlined,
  UnorderedListOutlined,
  CalculatorOutlined,
  UserOutlined,
} from "@ant-design/icons";

import styles from "@/styles/Home.module.css";

const TrackingList = (props) => {
  return (
    <Space direction="vertical" className={styles.trackingSpace}>
      <Input.Search
        placeholder="Введите трек номер"
        className={styles.inputs}
      />
      <Space direction="vertical" className={styles.trackingSpace2}>
      <Card title={"Заказ #1"} extra={<Button>Оплатить</Button>}>
        <Descriptions bordered>
          <Descriptions.Item label="Доставка из">Алматы</Descriptions.Item>
          <Descriptions.Item label="Доставка в" span={2}>
            Алматы
          </Descriptions.Item>
          <Descriptions.Item label="Вес">1кг</Descriptions.Item>
          <Descriptions.Item label="Стоимость" span={2}>
            255 тг
          </Descriptions.Item>
          <Descriptions.Item label="Статус" style={{ color: "green" }}>
            Доставлено
          </Descriptions.Item>
        </Descriptions>
      </Card>
      <Card title={"Заказ #2"} extra={<Button>Оплатить</Button>}>
        <Descriptions bordered>
          <Descriptions.Item label="Доставка из">Алматы</Descriptions.Item>
          <Descriptions.Item label="Доставка в" span={2}>
            Алматы
          </Descriptions.Item>
          <Descriptions.Item label="Вес">2кг</Descriptions.Item>
          <Descriptions.Item label="Стоимость" span={2}>
            255 тг
          </Descriptions.Item>
          <Descriptions.Item label="Статус" style={{ color: "green" }}>
            Доставлено
          </Descriptions.Item>
        </Descriptions>
      </Card>
      <Card title={"Заказ #3"} extra={<Button>Оплатить</Button>}>
        <Descriptions bordered>
          <Descriptions.Item label="Доставка из">Алматы</Descriptions.Item>
          <Descriptions.Item label="Доставка в" span={2}>
            Алматы
          </Descriptions.Item>
          <Descriptions.Item label="Вес">3кг</Descriptions.Item>
          <Descriptions.Item label="Стоимость" span={2}>
            255 тг
          </Descriptions.Item>
          <Descriptions.Item label="Статус" style={{ color: "red" }}>
            Не доставлено
          </Descriptions.Item>
        </Descriptions>
      </Card>
      </Space>
    </Space>
  );
};

export default TrackingList;
