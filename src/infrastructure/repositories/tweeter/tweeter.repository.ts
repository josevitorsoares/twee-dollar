import {
  IMAGE_DOLLAR_PATH,
  TWITTER_ACCESS_SECRET,
  TWITTER_ACCESS_TOKEN,
  TWITTER_APP_KEY,
  TWITTER_APP_SECRET,
} from "configs/environment/env";
import * as fs from "node:fs";
import type { ITwitterRepository } from "src/domain";
import TwitterApi from "twitter-api-v2";

export class TweeterRepository implements ITwitterRepository {
  private _twitterInstance: TwitterApi;

  constructor() {
    this._twitterInstance = new TwitterApi({
      appKey: TWITTER_APP_KEY,
      appSecret: TWITTER_APP_SECRET,
      accessToken: TWITTER_ACCESS_TOKEN,
      accessSecret: TWITTER_ACCESS_SECRET,
    });
  }

  async sendTweet(text: string): Promise<void> {
    const mediaData = fs.readFileSync(IMAGE_DOLLAR_PATH);

    const mediaId = await this._twitterInstance.v1.uploadMedia(mediaData, {
      mimeType: "image/jpeg",
    });

    await this._twitterInstance.v2.tweet(text, {
      media: { media_ids: [mediaId] },
    });
  }
}
