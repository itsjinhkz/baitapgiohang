import React, { Component } from "react";
import ItemDienThoai from "./ItemDienThoai";

export default class DanhSachDienThoai extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.data.map((dt) => {
            return (
              <ItemDienThoai
                data={dt}
                handleShowSanPhamChiTiet={this.props.handleShowSanPhamChiTiet}
                handleThemSanPham={this.props.handleThemSanPham}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
