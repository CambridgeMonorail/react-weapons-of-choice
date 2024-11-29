import styled from 'tailwind';

const StyledStorybookHost = styled.div`
  color: pink;
`;
export function StorybookHost() {
  return (
    <StyledStorybookHost>
      <h1>Welcome to StorybookHost!</h1>
    </StyledStorybookHost>
  );
}

export default StorybookHost;
