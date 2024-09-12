let isFetching = false;

export async function fetchLeads(page, limit, token) {
  try {
    const response = await fetch(`/api/v4/leads?page=${page}&limit=${limit}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data._embedded.leads;
  } catch (error) {
    console.error("Ошибка при загрузке карточек:", error);
    throw error;
  }
}

export function startFetching(page, limit, token, onDataFetched, onFinished) {
  if (isFetching) return;
  isFetching = true;
  let currentPage = page;

  const intervalId = setInterval(async () => {
    try {
      const leads = await fetchLeads(currentPage, limit, token);
      onDataFetched(leads);
      console.log(currentPage);

      currentPage += 1;

      if (currentPage > 4) {
        clearInterval(intervalId);
        onFinished();
        isFetching = false;
      }
    } catch (error) {
      clearInterval(intervalId);
      console.error("Ошибка при запросе:", error);
      isFetching = false;
    }
  }, 1000);
}
