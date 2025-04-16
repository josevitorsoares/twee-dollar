export interface ITwitterRepository {
  sendTweet(text: string): Promise<void>;
}
