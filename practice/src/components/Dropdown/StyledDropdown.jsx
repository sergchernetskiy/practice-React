import styled from "@emotion/styled";

export const Dropdown = styled.div`
  padding-top: ${(p) => p.theme.space[4]}px;
  padding-bottom: ${(p) => p.theme.space[4]}px;
  position: relative;
  width: 100px;
  border: ${(p) => p.theme.borders.normal};
  border-radius: ${(p) => p.theme.radii.normal};
  background: ${(p) => p.theme.colors.gradient};
  cursor: pointer;
`;

export const DropdownMenu = styled.button`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: ${(p) => p.theme.space[3]};
  text-align: center;
  background: ${(p) => p.theme.colors.pink};
  color: ${(p) => p.theme.colors.white};
`;
