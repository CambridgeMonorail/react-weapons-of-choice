import styled from 'tailwind';

const StyledShell = styled.div`
  color: pink;
`;
export function Shell() {
  return (
    <StyledShell>
      <h1>Welcome to Shell!</h1>
    </StyledShell>
  );
}

export default Shell;
