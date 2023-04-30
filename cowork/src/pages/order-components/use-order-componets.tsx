enum DefaultSectionOrder {
  Header,
  Description,
  SalaryRange,
  CompanyInfo,
  Feedback,
  ContactPoint,
  SearchAlert,
}
enum DefaultSectionOrder1 {
  Header,
  SearchAlert,
  Description,
  ContactPoint,
  SalaryRange,
  CompanyInfo,
  Feedback,
}
enum DefaultSectionOrder2 {
  SearchAlert,
  Description,
  Feedback,
  ContactPoint,
  SalaryRange,
  CompanyInfo,
  Header,
}

export const useOrderComponents = () => {
  const sectionOrder = () => {
    const section = Math.floor(Math.random() * 3);
    switch (section) {
      case 0:
        return DefaultSectionOrder;
      case 1:
        return DefaultSectionOrder1;
      case 2:
        return DefaultSectionOrder2;
      default:
        return DefaultSectionOrder;
    }
  };

  return {
    order: sectionOrder(),
  };
};
