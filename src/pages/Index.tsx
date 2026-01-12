import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Announcements from "@/components/Announcements";
import NewsAchievements from "@/components/NewsAchievements";
import QuickServices from "@/components/QuickServices";
import Destinations from "@/components/Destinations";
import Hotels from "@/components/Hotels";
import Culture from "@/components/Culture";
import Footer from "@/components/Footer";
import Modal from "@/components/GeneralModal";
import registerQr from "@/assets/qrcode/qrcode.png";
import { useState } from "react";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <TopBar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Navbar />
      <Hero />
      <Announcements />
      <NewsAchievements />
      <QuickServices />
      <Destinations />
      <Hotels />
      <Culture />
      <Footer />
      <div>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Register Your Hospitality Establishment"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            {/* QR Code */}
            <img
              src={registerQr}
              alt="Registration QR Code"
              className="w-48 h-48 object-contain"
            />

            <p className="text-sm text-gray-600">
              Scan the QR code to register your establishment.
            </p>

            <div className="text-sm text-gray-700">
              Or click the link below:
            </div>

            <a
              href="https://hotel-management-frontend-mu.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold underline hover:text-secondary transition"
            >
              Register your hospitality establishment
            </a>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Index;
