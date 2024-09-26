export interface IKnowledgeProps {
  title: string;
  description: string;
  titleSize: "base" | "sm" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
  descriptionSize: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  icon: React.ReactNode;
}