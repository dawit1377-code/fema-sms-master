// core.ts - The Brain of Fema SMS
export const ETHIOPIAN_MONTHS = [
  "Meskerem", "Tikimt", "Hidar", "Tahsas", "Tir", "Yakatit", 
  "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehase", "Pagume"
];

// Simple check for Telebirr Transaction Format
export const isValidTelebirrRef = (ref: string): boolean => {
  return ref.startsWith("FT") && ref.length >= 10;
};

// Grade Level Mapper for Addis Schools
export const getGradeCategory = (grade: number) => {
  if (grade <= 4) return "Lower Primary";
  if (grade <= 8) return "Upper Primary";
  if (grade <= 12) return "Secondary/Preparatory";
  return "Unknown";
};
