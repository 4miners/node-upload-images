import { PostimagesORG } from '../src/services/postimagesORG';

describe('postimages.org', () => {
  let sampleImage =
    'https://github.githubassets.com/images/modules/profile/achievements/arctic-code-vault-contributor-default.png';
  let firstUploadLink: string;

  it('should upload an image from a URL and return the URL of the uploaded image (with matching filename)', async () => {
    const service = new PostimagesORG();
    const result = await service.uploadFromUrl(sampleImage);

    //https://i.postimg.cc/0Q4zMrzY/arctic-code-vault-contributor-default.png
    let filename = 'arctic-code-vault-contributor-default.png';
    let rx = new RegExp(`^https:\/\/i\.postimg\.cc\/.+?\/${filename}$`);
    expect(result.directLink).toMatch(rx);

    firstUploadLink = result.directLink;
  });

  it('should upload an image from a URL and return the URL of the uploaded image (with random filename)', async () => {
    const service = new PostimagesORG();
    const result = await service.uploadFromUrl(sampleImage, true);

    // When the same file is uploaded, even with different filename - it returns the original link, probably based on file checksum
    expect(result.directLink).toMatch(firstUploadLink);
  });
});
