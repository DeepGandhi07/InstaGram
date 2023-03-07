import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Model from "../components/Model";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll ">
      {/* Modal */}
      <Model />
      {/* Header */}
      <Header />
      {/* Feed */}
      <Feed />
    </div>
  );
}
