import { UploadCC } from '../src/services/uploadCC';

describe('upload.cc', () => {
  let sampleImage =
    'https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png';

  it('should upload an image from a URL and return the URL of the uploaded image (filename is always random)', async () => {
    const service = new UploadCC();
    const result = await service.uploadFromUrl(sampleImage, true);
    //https://upload.cc/i1/2023/03/09/I421ae.png"
    let filename = '.png';
    let rx = new RegExp(`^https:\/\/upload\.cc\/.+?${filename}$`);
    expect(result.directLink).toMatch(rx);
  });
});
