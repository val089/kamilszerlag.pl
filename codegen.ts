import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl8odfnrw0ttk01undgydhvsi/master',
  documents: 'graphql/*.graphql',
  generates: {
    'generated/': {
      preset: 'client',
      plugins: [],
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
