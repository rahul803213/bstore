// app/[folderName]/page.tsx

import React from 'react';

interface Props {
  params: {
    folderName: string;
  };
}

const Page = async ({ params }: Props) => {
  const { folderName } = params;

  return (
    <div>
      <h1>Folder Name: {folderName}</h1>
    </div>
  );
};

export default Page;
