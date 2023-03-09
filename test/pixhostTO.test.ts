import { PixhostTO } from '../src/services/pixhostTO';

describe('pixhost.to', () => {
  let sampleImage =
    'https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png';

  it('should upload an image from a URL and return the URL of the uploaded image (with matching filename)', async () => {
    const service = new PixhostTO();
    const result = await service.uploadFromUrl(sampleImage);
    //https://img84.pixhost.to/images/56/340579117_arctic-code-vault-contributor-default.png
    let filename = 'arctic-code-vault-contributor-default.png';
    let rx = new RegExp(`^https:\/\/.+?\.pixhost\.to\/images\/.+?${filename}$`);
    expect(result.directLink).toMatch(rx);
  });

  it('should upload an image from a URL and return the URL of the uploaded image (with random filename)', async () => {
    const service = new PixhostTO();
    const result = await service.uploadFromUrl(sampleImage, true);
    //https://img84.pixhost.to/images/56/340579117_arctic-code-vault-contributor-default.png
    let filename = '.png';
    let rx = new RegExp(`^https:\/\/.+?\.pixhost\.to\/images\/.+?${filename}$`);
    expect(result.directLink).toMatch(rx);
  });
});
