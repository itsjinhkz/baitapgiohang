import React, { Component } from "react";
import ModalGioHang from "./ModalGioHang";
import DanhSachDienThoai from "./DanhSachDienThoai";
import SanPhamChiTiet from "./SanPhamChiTiet";
import { data } from "./data";

export default class Main extends Component {
  state = {
    dsdt: data,
    sanPhamChiTiet: data[0],
    gioHang: [],
  };
  handleShowSanPhamChiTiet = (value) => {
    this.setState({ sanPhamChiTiet: value });
  };
  handleThemSanPham = (value) => {
    let cloneGioHang = [...this.state.gioHang];
    let index = cloneGioHang.findIndex((item) => {
      return item.id == value.id;
    });
    if (index == -1) {
      let newObject = { ...value, soluong: 1 };
      cloneGioHang.push(newObject);
    } else {
      cloneGioHang[index].soluong++;
    }
    this.setState({ gioHang: cloneGioHang });
  };
  handleThayDoiSoLuong = (id) => {
    let realId = id < 0 ? id * -1 : id;
    let cloneGioHang = [...this.state.gioHang];
    let index = cloneGioHang.findIndex((item) => {
      return item.id == realId;
    });
    // if (id > 0) {
    //   if (index != -1) {
    //     cloneGioHang[index].soluong++;
    //   }
    // } else {
    //   if (index != -1) {
    //     cloneGioHang[index].soluong--;
    //   }
    // }
    // if (cloneGioHang[index].soluong == 0) {
    //   cloneGioHang.splice(index, 1);
    // }
    id > 0 && index !== -1 && cloneGioHang[index].soluong++;
    id < 0 &&
      index !== -1 &&
      cloneGioHang[index].soluong-- &&
      cloneGioHang[index].soluong == 0 &&
      cloneGioHang.splice(index, 1);

    this.setState({ gioHang: cloneGioHang });
  };
  render() {
    return (
      <div className="container p-5">
        <ModalGioHang
          gioHang={this.state.gioHang}
          handleThayDoiSoLuong={this.handleThayDoiSoLuong}
        />
        <SanPhamChiTiet data={this.state.sanPhamChiTiet} />
        <DanhSachDienThoai
          data={this.state.dsdt}
          handleShowSanPhamChiTiet={this.handleShowSanPhamChiTiet}
          handleThemSanPham={this.handleThemSanPham}
        />
      </div>
    );
  }
}
