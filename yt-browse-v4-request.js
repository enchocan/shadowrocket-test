try { $persistentStore.write(JSON.stringify({time:new Date().toISOString(),url:$request.url}),"yt_browse_v4_last"); } catch(e) {} $done({});
