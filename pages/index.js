import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import ProjectCollabSection from "@/components/ProjectCollabSection";
import FeaturesSection from "@/components/FeaturesSection";
import PaymentPlan from "@/components/PaymentPlan";
import ExpertsSection from "@/components/ExpertsSection";
import FooterSection from "@/components/FooterSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <ServicesSection />
      <ProjectCollabSection />
      <FeaturesSection />
      <PaymentPlan />
      <ExpertsSection />
      <FooterSection />
    </>
  );
}
