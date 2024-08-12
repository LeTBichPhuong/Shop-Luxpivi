document.addEventListener("DOMContentLoaded", function() {
    // Thêm sản phẩm
    var toggleAddFormButton = document.getElementById("toggleAddForm");
    var addProductForm = document.getElementById("addProductForm");
    var cancelAddProductButton = document.getElementById("cancelAddProduct");

    toggleAddFormButton.addEventListener("click", function() {
        addProductForm.style.display = addProductForm.style.display === "none" ? "block" : "none";
    });

    cancelAddProductButton.addEventListener("click", function() {
        addProductForm.style.display = "none";
    });

    // Sửa sản phẩm
    var toggleEditFormButton = document.getElementById("toggleEditForm");
    var editProductForm = document.getElementById("editProductForm");
    var cancelEditProductButton = document.getElementById("cancelEditProduct");

    toggleEditFormButton.addEventListener("click", function() {
        editProductForm.style.display = editProductForm.style.display === "none" ? "block" : "none";
    });

    cancelEditProductButton.addEventListener("click", function() {
        editProductForm.style.display = "none";
    });

    // Xóa sản phẩm
    var toggleDeleteFormButton = document.getElementById("toggleDeleteForm");
    var deleteProductForm = document.getElementById("deleteProductForm");
    var cancelDeleteProductButton = document.getElementById("cancelDeleteProduct");

    toggleDeleteFormButton.addEventListener("click", function() {
        deleteProductForm.style.display = deleteProductForm.style.display === "none" ? "block" : "none";
    });

    cancelDeleteProductButton.addEventListener("click", function() {
        deleteProductForm.style.display = "none";
    });
});


//Thêm sửa xóa khách hàng
    document.addEventListener("DOMContentLoaded", function() {
// Thêm khách hàng
    var toggleAddFormButton = document.getElementById("toggleAddForms");
    var addCustomerForm = document.getElementById("addCustomerForm");
    var cancelAddCustomerButton = document.getElementById("cancelAddCustomer");

    toggleAddFormButton.addEventListener("click", function() {
        addCustomerForm.style.display = addCustomerForm.style.display === "none" ? "block" : "none";
    });

    cancelAddCustomerButton.addEventListener("click", function() {
        addCustomerForm.style.display = "none";
    });

// Sửa khách hàng
    var toggleEditFormButton = document.getElementById("toggleEditForms");
    var editCustomerForm = document.getElementById("editCustomerForm");
    var cancelEditCustomerButton = document.getElementById("cancelEditCustomer");

    toggleEditFormButton.addEventListener("click", function() {
        editCustomerForm.style.display = editCustomerForm.style.display === "none" ? "block" : "none";
    });

    cancelEditCustomerButton.addEventListener("click", function() {
        editCustomerForm.style.display = "none";
    });

});

// Sửa mã giảm giá
document.addEventListener("DOMContentLoaded", function() {

    var toggleEditCouponFormButton = document.getElementById("toggleEditCouponForm");
    var editCouponForm = document.getElementById("editCouponForm");
    var cancelEditCouponButton = document.getElementById("cancelEditCoupon");

    toggleEditCouponFormButton.addEventListener("click", function() {
        editCouponForm.classList.toggle("hidden");
    });

    cancelEditCouponButton.addEventListener("click", function() {
        editCouponForm.classList.add("hidden");
    });
});


