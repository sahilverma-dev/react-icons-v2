/// <reference types="next" />

declare module "virtual:react-icons-get-icons" {
  function getIcons(
    id: string
  ): Promise<{ [name: string]: React.ComponentType }>;
}
