import React, { Component } from "react";
import { Modal, Button } from "antd";
import style from "./GioHangStyle.module.css";

export default class ModalGioHang extends Component {
  state = {
    isModalVisible: false,
  };
  showModal = () => {
    // setIsModalVisible(true);
    this.setState({ isModalVisible: true });
  };

  handleOk = () => {
    // setIsModalVisible(false);
    this.setState({ isModalVisible: false });
  };

  handleCancel = () => {
    // setIsModalVisible(false);
    this.setState({ isModalVisible: false });
  };
  renderSanPham = () => {
    return this.props.gioHang.map((sp) => {
      return (
        <tr>
          <td>{sp.id}</td>
          <td>
            <img style={{ width: "100px" }} src={sp.thumbnail_url} />
          </td>
          <td>{sp.name}</td>
          <td>
            <button
              onClick={() => {
                this.props.handleThayDoiSoLuong(sp.id);
              }}
              className="btn btn-success"
            >
              +
            </button>
            {sp.soluong}
            <button
              onClick={() => {
                this.props.handleThayDoiSoLuong(sp.id * -1);
              }}
              className="btn btn-warning"
            >
              -
            </button>
          </td>
          <td>{sp.price.toLocaleString()}</td>
          <td>{(sp.price * sp.soluong).toLocaleString()}</td>
        </tr>
      );
    });
  };
  renderTongSoLuong = () => {
    let count = 0;
    this.props.gioHang.forEach((item) => {
      count += item.soluong;
    });
    return count;
  };
  render() {
    return (
      <>
        <Button
          className={style.btnCart}
          type="primary"
          onClick={this.showModal}
        >
          Giỏ Hàng [{this.renderTongSoLuong()}]
        </Button>
        <Modal
          title="Giỏ Hàng"
          visible={this.state.isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={1000}
        >
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th>Mã</th>
                  <th>Hình</th>
                  <th>Tên</th>
                  <th>Số Lượng</th>
                  <th>Đơn Giá</th>
                  <th>Thành Tiền</th>
                </tr>
              </thead>
              <tbody>{this.renderSanPham()}</tbody>
            </table>
          </div>
        </Modal>
      </>
    );
  }
}
