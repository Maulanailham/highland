export function getAppTimeZone(): string {
  const defaultTimeZone = "Asia/Jakarta";
  return process.env.APP_TIMEZONE || defaultTimeZone;
}
