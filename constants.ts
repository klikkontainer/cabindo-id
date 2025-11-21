import { 
  Construction, 
  Home, 
  Truck, 
  Warehouse, 
  Coffee, 
  ShieldCheck 
} from 'lucide-react';
import { ServiceItem, ProjectItem, TestimonialItem } from './types';

export const COMPANY_NAME = "Cabindo";
export const FULL_COMPANY_NAME = "PT NIAGA KONSTRUKSI CABINDO";
export const COMPANY_DESCRIPTION = "Spesialis Bangunan Modular & Modifikasi Kontainer Terpercaya di Indonesia.";

export const SERVICES: ServiceItem[] = [
  {
    title: "Office Container",
    description: "Ruang kantor portable yang nyaman, efisien, dan siap pakai untuk kebutuhan proyek lapangan atau kantor sementara.",
    icon: Home
  },
  {
    title: "Modular Building",
    description: "Konstruksi bangunan prefabrikasi cepat bangun untuk camp pekerja, sekolah, atau rumah sakit darurat.",
    icon: Construction
  },
  {
    title: "Logistics & Modifikasi",
    description: "Modifikasi kontainer untuk kebutuhan logistik khusus, storage, atau unit transportasi custom.",
    icon: Truck
  },
  {
    title: "Warehouse & Storage",
    description: "Gudang portable dan unit penyimpanan yang aman, tahan cuaca, dan mudah dipindahkan.",
    icon: Warehouse
  },
  {
    title: "Cafe & Retail",
    description: "Unit kontainer estetis untuk cafe, booth pameran, atau toko retail dengan desain menarik.",
    icon: Coffee
  },
  {
    title: "Sewa & Jual",
    description: "Layanan fleksibel penyewaan (rental) atau pembelian unit baru dan rekondisi dengan kualitas terjamin.",
    icon: ShieldCheck
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "Site Office Mining Project",
    category: "Office",
    imageUrl: "https://picsum.photos/id/43/800/600",
    description: "Kompleks kantor lapangan 2 lantai untuk perusahaan pertambangan di Kalimantan Timur."
  },
  {
    id: 2,
    title: "Modular Medical Clinic",
    category: "Healthcare",
    imageUrl: "https://picsum.photos/id/82/800/600",
    description: "Klinik kesehatan darurat berbasis modular di daerah terpencil."
  },
  {
    id: 3,
    title: "Industrial Worker Camp",
    category: "Accommodation",
    imageUrl: "https://picsum.photos/id/164/800/600",
    description: "Akomodasi pekerja kapasitas 500 orang lengkap dengan fasilitas sanitasi."
  },
  {
    id: 4,
    title: "Pop-up Container Cafe",
    category: "Retail",
    imageUrl: "https://picsum.photos/id/201/800/600",
    description: "Cafe kontainer modern di pusat kota Jakarta."
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Project Manager",
    company: "PT Mineral Jaya",
    content: "Cabindo memberikan solusi site office yang sangat cepat dan berkualitas. Sangat membantu operasional kami di site."
  },
  {
    id: 2,
    name: "Siti Aminah",
    role: "Owner",
    company: "Kopi Senja",
    content: "Desain cafe kontainernya unik dan pengerjaannya rapi. Terima kasih tim Cabindo!"
  }
];
