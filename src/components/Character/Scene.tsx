# Overwrite Scene.tsx with empty component
@"
const Scene = () => {
  return null;
};

export default Scene;
"@ | Out-File -FilePath src/components/Character/Scene.tsx -Encoding utf8