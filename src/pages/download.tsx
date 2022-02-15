import { useEffect } from 'react';
import { isIOS, isIOS13, isMacOs } from 'react-device-detect';
import PageSEO from 'src/components/PageSEO';

export default function DownloadPage() {
  useEffect(() => {
    const downloadUrl =
      isIOS || isIOS13 || isMacOs
        ? 'https://apps.apple.com/app/id1597643827'
        : 'https://play.google.com/store/apps/details?id=org.collaction.collaction_app';
    window.location.href = downloadUrl;
  }, []);

  return (
    <>
      <PageSEO
        title="CollAction | Download our App"
        description="Download the CollAction app to join others and make a real difference."
      />

      <main className="bg-black-0 p-5 md:p-12">
        <div className="max-w-600 mx-auto text-center ">
          <h1 className="text-black-400 mb-6">CollAction App</h1>

          <p>Please wait. Redirecting now..</p>
        </div>
      </main>
    </>
  );
}
