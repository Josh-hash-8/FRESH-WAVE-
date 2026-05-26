// ===== ADMIN.JS - Complete Admin Functions =====

// Load admin dashboard data
function loadAdminDashboard() {
  loadAdminStats();
  loadRecentOrders();
}

function loadAdminStats() {
  const allOrders = JSON.parse(localStorage.getItem("all_orders") || "[]");
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const totalOrders = allOrders.length;
  const pendingOrders = allOrders.filter(
    (o) => o.status === "confirmed" || o.status === "preparing",
  ).length;
  const deliveredOrders = allOrders.filter(
    (o) => o.status === "delivered",
  ).length;
  const totalRevenue = allOrders
    .filter((o) => o.status !== "cancelled")
    .reduce((sum, o) => sum + (o.total || 0), 0);

  document.getElementById("statTotalOrders") &&
    (document.getElementById("statTotalOrders").textContent = totalOrders);
  document.getElementById("statPendingOrders") &&
    (document.getElementById("statPendingOrders").textContent = pendingOrders);
  document.getElementById("statDeliveredOrders") &&
    (document.getElementById("statDeliveredOrders").textContent =
      deliveredOrders);
  document.getElementById("statTotalRevenue") &&
    (document.getElementById("statTotalRevenue").textContent =
      `UGX ${totalRevenue.toLocaleString()}`);

  // Also update metrics in stats page
  document.getElementById("totalRevenueMetric") &&
    (document.getElementById("totalRevenueMetric").textContent =
      `UGX ${totalRevenue.toLocaleString()}`);
  document.getElementById("totalOrdersMetric") &&
    (document.getElementById("totalOrdersMetric").textContent = totalOrders);
  document.getElementById("totalCustomersMetric") &&
    (document.getElementById("totalCustomersMetric").textContent =
      users.length);

  const deliveryRate =
    totalOrders > 0 ? Math.round((deliveredOrders / totalOrders) * 100) : 0;
  document.getElementById("deliveryRateMetric") &&
    (document.getElementById("deliveryRateMetric").textContent =
      `${deliveryRate}%`);
}

function loadRecentOrders() {
  const allOrders = JSON.parse(localStorage.getItem("all_orders") || "[]");
  const recentOrders = allOrders
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);
  const container = document.getElementById("recentOrdersList");

  if (container) {
    if (recentOrders.length === 0) {
      container.innerHTML =
        '<p style="text-align:center; padding:20px;">No orders yet</p>';
    } else {
      container.innerHTML = recentOrders
        .map(
          (order) => `
                <div class="recent-order-item">
                    <div><strong>#${order.orderNumber}</strong></div>
                    <div>${order.date}</div>
                    <div>UGX ${(order.total || 0).toLocaleString()}</div>
                    <div><span class="order-status status-${order.status || "confirmed"}">${order.status || "Confirmed"}</span></div>
                    <div><a href="https://wa.me/${order.customerPhone || "256764496110"}" target="_blank" style="background:#25D366; color:white; padding:4px 12px; border-radius:20px; text-decoration:none; font-size:12px;">Contact</a></div>
                </div>
            `,
        )
        .join("");
    }
  }
}

// Orders Table Functions
function loadAdminOrdersTable() {
  const allOrders = JSON.parse(localStorage.getItem("all_orders") || "[]");
  const tbody = document.getElementById("ordersTableBody");

  if (tbody) {
    if (allOrders.length === 0) {
      tbody.innerHTML =
        '<tr><td colspan="7" style="text-align:center; padding:40px;">No orders yet</td></tr>';
    } else {
      allOrders.sort((a, b) => new Date(b.date) - new Date(a.date));
      tbody.innerHTML = allOrders
        .map(
          (order) => `
                <tr>
                    <td><strong>${order.orderNumber}</strong></td>
                    <td>${order.customerEmail ? order.customerEmail.split("@")[0] : "Guest"}</td>
                    <td style="font-size:12px;">${order.date}</td>
                    <td>UGX ${(order.total || 0).toLocaleString()}</td>
                    <td>${order.paymentMethod || "N/A"}</td>
                    <td><span class="status-badge status-${order.status || "confirmed"}">${order.status || "Confirmed"}</span></td>
                    <td class="action-btns">
                        <select onchange="updateOrderStatus('${order.orderNumber}', this.value)">
                            <option value="confirmed" ${order.status === "confirmed" ? "selected" : ""}>Confirmed</option>
                            <option value="preparing" ${order.status === "preparing" ? "selected" : ""}>Preparing</option>
                            <option value="onway" ${order.status === "onway" ? "selected" : ""}>On The Way</option>
                            <option value="delivered" ${order.status === "delivered" ? "selected" : ""}>Delivered</option>
                            <option value="cancelled" ${order.status === "cancelled" ? "selected" : ""}>Cancelled</option>
                        </select>
                        <a href="https://wa.me/${order.customerPhone || "256764496110"}" target="_blank" class="whatsapp-link"><i class="fab fa-whatsapp"></i> Chat</a>
                        <button class="view-details-btn" onclick="viewOrderDetails('${order.orderNumber}')"><i class="fas fa-eye"></i> View</button>
                    </td>
                </tr>
            `,
        )
        .join("");
    }
  }
}

let currentFilter = "all";
let allOrdersCache = [];

function filterOrdersTable(status) {
  currentFilter = status;
  const allOrders = JSON.parse(localStorage.getItem("all_orders") || "[]");
  allOrdersCache = allOrders;

  const filtered =
    status === "all" ? allOrders : allOrders.filter((o) => o.status === status);
  const tbody = document.getElementById("ordersTableBody");

  if (filtered.length === 0) {
    tbody.innerHTML =
      '<tr><td colspan="7" style="text-align:center; padding:40px;">No orders found</td></tr>';
  } else {
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    tbody.innerHTML = filtered
      .map(
        (order) => `
            <tr>
                <td><strong>${order.orderNumber}</strong></td>
                <td>${order.customerEmail ? order.customerEmail.split("@")[0] : "Guest"}</td>
                <td style="font-size:12px;">${order.date}</td>
                <td>UGX ${(order.total || 0).toLocaleString()}</td>
                <td>${order.paymentMethod || "N/A"}</td>
                <td><span class="status-badge status-${order.status || "confirmed"}">${order.status || "Confirmed"}</span></td>
                <td class="action-btns">
                    <select onchange="updateOrderStatus('${order.orderNumber}', this.value)">
                        <option value="confirmed" ${order.status === "confirmed" ? "selected" : ""}>Confirmed</option>
                        <option value="preparing" ${order.status === "preparing" ? "selected" : ""}>Preparing</option>
                        <option value="onway" ${order.status === "onway" ? "selected" : ""}>On The Way</option>
                        <option value="delivered" ${order.status === "delivered" ? "selected" : ""}>Delivered</option>
                        <option value="cancelled" ${order.status === "cancelled" ? "selected" : ""}>Cancelled</option>
                    </select>
                    <a href="https://wa.me/${order.customerPhone || "256764496110"}" target="_blank" class="whatsapp-link"><i class="fab fa-whatsapp"></i> Chat</a>
                    <button class="view-details-btn" onclick="viewOrderDetails('${order.orderNumber}')"><i class="fas fa-eye"></i> View</button>
                </td>
            </tr>
        `,
      )
      .join("");
  }

  document
    .querySelectorAll(".filter-btn")
    .forEach((btn) => btn.classList.remove("active"));
  if (event && event.target) event.target.classList.add("active");
}

function updateOrderStatus(orderNumber, newStatus) {
  const allOrders = JSON.parse(localStorage.getItem("all_orders") || "[]");
  const orderIndex = allOrders.findIndex((o) => o.orderNumber === orderNumber);

  if (orderIndex !== -1) {
    allOrders[orderIndex].status = newStatus;
    allOrders[orderIndex].deliveryStatus = newStatus;
    localStorage.setItem("all_orders", JSON.stringify(allOrders));

    const customerEmail = allOrders[orderIndex].customerEmail;
    if (customerEmail) {
      const customerOrders = JSON.parse(
        localStorage.getItem(`orders_${customerEmail}`) || "[]",
      );
      const customerOrderIndex = customerOrders.findIndex(
        (o) => o.orderNumber === orderNumber,
      );
      if (customerOrderIndex !== -1) {
        customerOrders[customerOrderIndex].status = newStatus;
        customerOrders[customerOrderIndex].deliveryStatus = newStatus;
        localStorage.setItem(
          `orders_${customerEmail}`,
          JSON.stringify(customerOrders),
        );
      }
    }

    showNotification(
      `Order #${orderNumber} updated to ${newStatus}`,
      "success",
    );
    filterOrdersTable(currentFilter);
    loadAdminStats();
  }
}

function viewOrderDetails(orderNumber) {
  const allOrders = JSON.parse(localStorage.getItem("all_orders") || "[]");
  const order = allOrders.find((o) => o.orderNumber === orderNumber);

  if (order) {
    const itemsHtml = order.items
      ? order.items
          .map(
            (i) => `
            <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #eee;">
                <span>${i.name} x${i.quantity}</span>
                <span>UGX ${(i.price * i.quantity).toLocaleString()}</span>
            </div>
        `,
          )
          .join("")
      : "<p>No items</p>";

    const modalContent = `
            <div style="margin-bottom:15px;">
                <p><strong>Order Number:</strong> ${order.orderNumber}</p>
                <p><strong>Date:</strong> ${order.date}</p>
                <p><strong>Customer:</strong> ${order.customerEmail || "Guest"}</p>
                <p><strong>Phone:</strong> ${order.customerPhone || "N/A"}</p>
                <p><strong>Delivery Address:</strong> ${order.address || "N/A"}</p>
                <p><strong>Payment Method:</strong> ${order.paymentMethod || "N/A"}</p>
                <p><strong>Status:</strong> <span class="status-badge status-${order.status || "confirmed"}">${order.status || "Confirmed"}</span></p>
            </div>
            <div style="background:#f8f9fa; padding:15px; border-radius:10px;">
                <strong>Order Items:</strong>
                ${itemsHtml}
                <div style="display:flex; justify-content:space-between; margin-top:10px; padding-top:10px; border-top:2px solid #ddd; font-weight:bold;">
                    <span>Total:</span>
                    <span>UGX ${(order.total || 0).toLocaleString()}</span>
                </div>
            </div>
            <div style="margin-top:20px; display:flex; gap:10px;">
                <a href="https://wa.me/${order.customerPhone || "256764496110"}" target="_blank" class="whatsapp-link" style="display:inline-block; background:#25D366; color:white; padding:10px; border-radius:10px; text-decoration:none; text-align:center; flex:1;">Contact Customer</a>
                <button onclick="updateOrderStatus('${order.orderNumber}', 'delivered'); closeOrderDetailsModal();" style="flex:1; background:#2e8b57; color:white; border:none; padding:10px; border-radius:10px; cursor:pointer;">Mark Delivered</button>
            </div>
        `;

    document.getElementById("orderDetailsContent").innerHTML = modalContent;
    document.getElementById("orderDetailsModal").classList.add("active");
  }
}

function closeOrderDetailsModal() {
  document.getElementById("orderDetailsModal").classList.remove("active");
}

// Customers Functions
function loadCustomersTable() {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const allOrders = JSON.parse(localStorage.getItem("all_orders") || "[]");
  const tbody = document.getElementById("customersTableBody");

  document.getElementById("totalCustomers") &&
    (document.getElementById("totalCustomers").textContent = users.length);

  if (tbody) {
    if (users.length === 0) {
      tbody.innerHTML =
        '<tr><td colspan="6" style="text-align:center; padding:40px;">No customers yet</td></tr>';
    } else {
      tbody.innerHTML = users
        .map((user) => {
          const userOrders = allOrders.filter(
            (o) => o.customerEmail === user.email,
          );
          const totalSpent = userOrders.reduce(
            (sum, o) => sum + (o.total || 0),
            0,
          );
          return `
                    <tr>
                        <td><strong>${user.name}</strong></td>
                        <td>${user.email}</td>
                        <td>${user.phone || "N/A"}</td>
                        <td><span class="customer-orders">${userOrders.length} orders</span></td>
                        <td>UGX ${totalSpent.toLocaleString()}</td>
                        <td>
                            <a href="https://wa.me/${user.phone || "256764496110"}" target="_blank" class="contact-customer"><i class="fab fa-whatsapp"></i> Contact</a>
                            <button onclick="viewCustomerDetails('${user.email}')" style="background:#2196F3; color:white; border:none; padding:5px 12px; border-radius:20px; margin-left:5px; cursor:pointer;">View</button>
                        </td>
                    </tr>
                `;
        })
        .join("");
    }
  }
}

function viewCustomerDetails(email) {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find((u) => u.email === email);
  const allOrders = JSON.parse(localStorage.getItem("all_orders") || "[]");
  const userOrders = allOrders.filter((o) => o.customerEmail === email);
  const totalSpent = userOrders.reduce((sum, o) => sum + (o.total || 0), 0);

  const ordersHtml = userOrders
    .map(
      (order) => `
        <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #eee;">
            <span>#${order.orderNumber}</span>
            <span>${order.date}</span>
            <span>UGX ${(order.total || 0).toLocaleString()}</span>
            <span class="status-badge status-${order.status || "confirmed"}">${order.status || "Confirmed"}</span>
        </div>
    `,
    )
    .join("");

  const modalContent = `
        <div style="margin-bottom:15px;">
            <p><strong>Name:</strong> ${user.name}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone || "N/A"}</p>
            <p><strong>Address:</strong> ${user.address || "N/A"}</p>
            <p><strong>Total Orders:</strong> ${userOrders.length}</p>
            <p><strong>Total Spent:</strong> UGX ${totalSpent.toLocaleString()}</p>
        </div>
        <div style="background:#f8f9fa; padding:15px; border-radius:10px;">
            <strong>Order History:</strong>
            ${ordersHtml || "<p>No orders</p>"}
        </div>
        <div style="margin-top:20px;">
            <a href="https://wa.me/${user.phone || "256764496110"}" target="_blank" class="whatsapp-link" style="display:inline-block; background:#25D366; color:white; padding:10px; border-radius:10px; text-decoration:none; text-align:center; width:100%;">Contact Customer on WhatsApp</a>
        </div>
    `;

  document.getElementById("customerDetailsContent").innerHTML = modalContent;
  document.getElementById("customerDetailsModal").classList.add("active");
}

function closeCustomerDetailsModal() {
  document.getElementById("customerDetailsModal").classList.remove("active");
}

// Statistics Functions
function loadStatistics() {
  const allOrders = JSON.parse(localStorage.getItem("all_orders") || "[]");
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  // Orders by status
  const statusCounts = {
    confirmed: allOrders.filter((o) => o.status === "confirmed").length,
    preparing: allOrders.filter((o) => o.status === "preparing").length,
    onway: allOrders.filter((o) => o.status === "onway").length,
    delivered: allOrders.filter((o) => o.status === "delivered").length,
    cancelled: allOrders.filter((o) => o.status === "cancelled").length,
  };

  const statusContainer = document.getElementById("statusChart");
  if (statusContainer) {
    statusContainer.innerHTML = `
            <div class="category-stats">
                <div><strong>Confirmed:</strong> ${statusCounts.confirmed} orders</div>
                <div class="progress-bar-container"><div class="progress-fill" style="width: ${allOrders.length ? (statusCounts.confirmed / allOrders.length) * 100 : 0}%">${Math.round((statusCounts.confirmed / allOrders.length) * 100)}%</div></div>
                <div><strong>Preparing:</strong> ${statusCounts.preparing} orders</div>
                <div class="progress-bar-container"><div class="progress-fill" style="width: ${allOrders.length ? (statusCounts.preparing / allOrders.length) * 100 : 0}%">${Math.round((statusCounts.preparing / allOrders.length) * 100)}%</div></div>
                <div><strong>On The Way:</strong> ${statusCounts.onway} orders</div>
                <div class="progress-bar-container"><div class="progress-fill" style="width: ${allOrders.length ? (statusCounts.onway / allOrders.length) * 100 : 0}%">${Math.round((statusCounts.onway / allOrders.length) * 100)}%</div></div>
                <div><strong>Delivered:</strong> ${statusCounts.delivered} orders</div>
                <div class="progress-bar-container"><div class="progress-fill" style="width: ${allOrders.length ? (statusCounts.delivered / allOrders.length) * 100 : 0}%">${Math.round((statusCounts.delivered / allOrders.length) * 100)}%</div></div>
                <div><strong>Cancelled:</strong> ${statusCounts.cancelled} orders</div>
                <div class="progress-bar-container"><div class="progress-fill" style="width: ${allOrders.length ? (statusCounts.cancelled / allOrders.length) * 100 : 0}%">${Math.round((statusCounts.cancelled / allOrders.length) * 100)}%</div></div>
            </div>
        `;
  }

  // Top selling products
  const productSales = {};
  allOrders.forEach((order) => {
    if (order.items) {
      order.items.forEach((item) => {
        if (!productSales[item.name]) productSales[item.name] = 0;
        productSales[item.name] += item.quantity;
      });
    }
  });

  const topProducts = Object.entries(productSales)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
  const topProductsContainer = document.getElementById("topProductsList");
  if (topProductsContainer) {
    topProductsContainer.innerHTML = topProducts
      .map(
        ([name, qty]) => `
            <div>
                <strong>${name}</strong> - ${qty} units sold
                <div class="progress-bar-container"><div class="progress-fill" style="width: ${topProducts.length ? (qty / topProducts[0][1]) * 100 : 0}%">${Math.round((qty / topProducts[0][1]) * 100)}%</div></div>
            </div>
        `,
      )
      .join("");
  }

  // Payment methods
  const paymentMethods = {
    "Airtel Money": 0,
    "MTN Mobile Money": 0,
    "Cash on Delivery": 0,
  };
  allOrders.forEach((order) => {
    if (order.paymentMethod === "Airtel Money")
      paymentMethods["Airtel Money"]++;
    else if (order.paymentMethod === "MTN Mobile Money")
      paymentMethods["MTN Mobile Money"]++;
    else if (order.paymentMethod === "Cash on Delivery")
      paymentMethods["Cash on Delivery"]++;
  });

  const paymentContainer = document.getElementById("paymentMethodsList");
  if (paymentContainer) {
    paymentContainer.innerHTML = Object.entries(paymentMethods)
      .map(
        ([method, count]) => `
            <div>
                <strong>${method}:</strong> ${count} orders
                <div class="progress-bar-container"><div class="progress-fill" style="width: ${allOrders.length ? (count / allOrders.length) * 100 : 0}%">${Math.round((count / allOrders.length) * 100)}%</div></div>
            </div>
        `,
      )
      .join("");
  }

  // Daily sales
  const dailySales = {};
  allOrders.forEach((order) => {
    const date = order.date.split(",")[0];
    if (!dailySales[date]) dailySales[date] = 0;
    dailySales[date] += order.total || 0;
  });

  const recentDays = Object.entries(dailySales)
    .sort((a, b) => new Date(b[0]) - new Date(a[0]))
    .slice(0, 7);
  const dailyContainer = document.getElementById("dailySalesList");
  if (dailyContainer) {
    dailyContainer.innerHTML = recentDays
      .map(
        ([date, amount]) => `
            <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #eee;">
                <span>${date}</span>
                <span><strong>UGX ${amount.toLocaleString()}</strong></span>
            </div>
        `,
      )
      .join("");
  }
}

// Export Data
function exportData(type) {
  if (type === "orders") {
    const allOrders = JSON.parse(localStorage.getItem("all_orders") || "[]");
    const csv = convertToCSV(allOrders);
    downloadCSV(csv, "freshwave_orders.csv");
    showNotification("Orders exported successfully!", "success");
  } else if (type === "customers") {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const csv = convertToCSV(users);
    downloadCSV(csv, "freshwave_customers.csv");
    showNotification("Customers exported successfully!", "success");
  }
}

function convertToCSV(data) {
  if (!data.length) return "";
  const headers = Object.keys(data[0]);
  const csvRows = [headers.join(",")];
  for (const row of data) {
    const values = headers.map((header) => {
      const val = row[header] || "";
      return `"${String(val).replace(/"/g, '""')}"`;
    });
    csvRows.push(values.join(","));
  }
  return csvRows.join("\n");
}

function downloadCSV(csv, filename) {
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// Page-specific initialization
document.addEventListener("DOMContentLoaded", function () {
  const page = window.location.pathname.split("/").pop();

  if (page === "admin.html") {
    loadAdminDashboard();
  } else if (page === "admin-orders.html") {
    loadAdminOrdersTable();
  } else if (page === "admin-customers.html") {
    loadCustomersTable();
  } else if (page === "admin-stats.html") {
    loadStatistics();
  }
});
