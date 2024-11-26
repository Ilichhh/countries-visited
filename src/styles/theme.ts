import { createSystem, defaultConfig, defineConfig, mergeConfigs } from '@chakra-ui/react';

const config = defineConfig(
  mergeConfigs(defaultConfig, {
    globalCss: {
      body: {
        colorPalette: 'grey',
      },
    },
  })
);

export default createSystem(config);
