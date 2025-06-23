// lib/data/DropdownData.ts

type DropdownMenu = {
  url: string;
  label: string;
};

export const AdminDropdown: DropdownMenu[] = [
  { url: "/admin/profile", label: "Halaman Profil" },
  { url: "/admin/profile/edit", label: "Edit Profil" },
  { url: "/admin/manage-events", label: "Kelola Acara" },
  { url: "/admin/virtual-tour", label: "Kelola Virtual Tour" },
];

export const GuestDropdown: DropdownMenu[] = [
  { url: "/user/profile", label: "Halaman Profil" },
  { url: "/user/profile/edit", label: "Edit Profil" },
  { url: "/user/review", label: "Ulasan Saya" },
  { url: "/user/peta", label: "Lihat Peta Interaktif" },
];
