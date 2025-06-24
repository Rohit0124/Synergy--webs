import rec from "./assets/Images/circle.png";

const config = [
    {
    
      moduleName: "master",
      moduleDisplayName: "Master",
      Icon: rec,
      id: "1",
      permission_status:1,
      firstData: [
        {
          moduleName: "Company",
          moduleDisplayName: "Company",
          moduleOrders: 1,
          id: "1-1",
          permission_status:1,
          secondData: [
            {
              moduleName: "CompanyListing",
              moduleDisplayName: "CompanyList",
              moduleOrders: 1,
              id: "1-1-1",
              permission_status:1,
              thirdData: [],
              moduleLink: 'master/company/companylist',
            },
          ],
        },
        {
          moduleName: "structure",
          moduleDisplayName: "Structure",
          moduleOrders: 2,
          id: "1-2",
          permission_status:1,
          secondData: [
            {
              moduleName: "Structurelisting",
              moduleDisplayName: "StructureList",
              moduleOrders: 1,
              id: "1-2-1",
              thirdData: [],
              moduleLink: 'master/structure/structurelist',
            },
          ],
        },
        {
          moduleName: "franchises",
          moduleDisplayName: "Franchises",
          moduleOrders: 3,
          id: "1-3",
          secondData: [
            {
              moduleName: "Franchiseslisting",
              moduleDisplayName: "Franchises Listing",
              moduleOrders: 1,
              id: "1-3-1",
              thirdData: [],
              moduleLink: 'master/franchises/franchiseslist',
            },
          ],
        },
        {
          moduleName: "usergroups",
          moduleDisplayName: "User Groups",
          moduleOrders: 4,
          id: "1-4",
          secondData: [
            {
              moduleName: "Usergroupslisting",
              moduleDisplayName: "UserGroupListing",
              moduleOrders: 1,
              id: "1-4-1",
              thirdData: [],
              moduleLink:'master/usergroups/usergrouplist'
            },
          ],
        },
        {
          moduleName: "templates",
          moduleDisplayName: "Master Template",
          moduleOrders: 5,
          id: "1-5",
          secondData: [
            {
              moduleName: "Mastertemplatelisting",
              moduleDisplayName: "Master Templates Listing",
              moduleOrders: 1,
              id: "1-5-1",
              thirdData: [],
              moduleLink:'master/mastertemplate/mastertemplatelist'
            },
            {
              moduleName: "Usertemplatelisting",
              moduleDisplayName: "UserTemplatesListing",
              moduleOrders: 2,
              id: "1-5-2",
              thirdData: [],
              moduleLink:'master/mastertemplate/usertemplatelist'
            },
          ],
        },
      ],
    },
    {
      moduleName: "customer",
      moduleDisplayName: "Customer",
      moduleOrders: 80,
      Icon: rec,
      id: "2",
      firstData: [
        {
          moduleName: "Customerlisting",
          moduleDisplayName: "CustomerListing",
          moduleOrders: 1,
          id: "2-1",
          secondData: [],
          moduleLink:'customer/customerlist'
        },
      ],
    },
    {
      moduleName: "mis",
      moduleDisplayName: "MIS",
      moduleOrders: 90,
      Icon: rec,
      id: "3",
      firstData: [
        {
          moduleName: "sale",
          moduleDisplayName: "Sale",
          moduleOrders: 1,
          id: "3-1",
          secondData: [
            {
              moduleName: "franchisewise",
              moduleDisplayName: "Franchise Wise",
              moduleOrders: 1,
              id: "3-1-1",
              thirdData: [
                {
                  moduleName: "Detailedreport",
                  moduleDisplayName: "Franchise Wise Detailed Report",
                  moduleOrders: 1,
                  id: "3-1-1-1",
                  fourthData: [],
                  moduleLink:'MIS/sales/franchisedetailreport',
                },
                {
                  moduleName: "Summaryreport",
                  moduleDisplayName: "Franchise Wise Summary Report",
                  moduleOrders: 2,
                  id: "3-1-1-2",
                  fourthData: [],
                  moduleLink:'MIS/sales/franchisesummaryreport',
                },
              ],
            },
            {
              moduleName: "dispenserwise",
              moduleDisplayName: "Dispenser Wise",
              moduleOrders: 2,
              id: "3-1-2",
              thirdData: [
                {
                  moduleName: "Dispenserreport",
                  moduleDisplayName: "Dispenser Wise Detailed Report",
                  moduleOrders: 1,
                  id: "3-1-2-1",
                  fourthData: [],
                  moduleLink:'MIS/sales/dispenserdetailreport',
                },
                {
                  moduleName: "Dispensersummary",
                  moduleDisplayName: "Dispenser Wise Summary Report",
                  moduleOrders: 2,
                  id: "3-1-2-2",
                  fourthData: [],
                  moduleLink:'MIS/sales/dispensersummaryreport',
                },
              ],
            },
            {
              moduleName: "productwise",
              moduleDisplayName: "Product Wise",
              moduleOrders: 3,
              id: "3-1-3",
              thirdData: [
                {
                  moduleName: "Productreport",
                  moduleDisplayName: "Product Wise Detailed Report",
                  moduleOrders: 1,
                  id: "3-1-3-1",
                  fourthData: [],
                  moduleLink:'MIS/sales/productdetailreport',
                },
                {
                  moduleName: "Productsummary",
                  moduleDisplayName: "Product Wise Summary Report",
                  moduleOrders: 2,
                  id: "3-1-3-2",
                  fourthData: [],
                  moduleLink:'MIS/sales/productsummaryreport',
                },
              ],
            },
            {
              moduleName: "dsmwise",
              moduleDisplayName: "DSM Wise",
              moduleOrders: 4,
              id: "3-1-4",
              thirdData: [
                {
                  moduleName: "DSMreport",
                  moduleDisplayName: "DSM Wise Detail Report",
                  moduleOrders: 1,
                  id: "3-1-4-1",
                  fourthData: [],
                  moduleLink:'MIS/sales/DSMdetailreport',
                },
                {
                  moduleName: "Dsmsummary",
                  moduleDisplayName: "DSM Wise Summary Report",
                  moduleOrders: 2,
                  id: "3-1-4-2",
                  fourthData: [],
                  moduleLink:'MIS/sales/DSMsummaryreport',
                },
              ],
            },
            {
              moduleName: "paymentmodewise",
              moduleDisplayName: "Payment Mode Wise",
              moduleOrders: 5,
              id: "3-1-5",
              thirdData: [
                {
                  moduleName: "Paymentreport",
                  moduleDisplayName: "Payment Mode Wise Detail Report",
                  moduleOrders: 1,
                  id: "3-1-5-1",
                  fourthData: [],
                  moduleLink:'MIS/sales/PaymentDetailreport',
                },
                {
                  moduleName: "PaymentSummary",
                  moduleDisplayName: "Payment Mode Wise Summary Report",
                  moduleOrders: 2,
                  id: "3-1-5-2",
                  fourthData: [],
                  moduleLink:'MIS/sales/Paymentsummaryreport',
                },
              ],
            },
            {
              moduleName: "openclose",
              moduleDisplayName: "Opening and Closing Balance",
              moduleOrders: 6,
              id: "3-1-6",
              thirdData: [
                {
                  moduleName: "openclosereport",
                  moduleDisplayName: "Open/Close Report",
                  moduleOrders: 1,
                  id: "3-1-6-1",
                  fourthData: [],
                  moduleLink:'MIS/sales/Openclosereport',
                },
              ],
            },
            {
              moduleName: "shiftwise",
              moduleDisplayName: "Shift Wise",
              moduleOrders: 5,
              id: "3-1-7",
              thirdData: [
                {
                  moduleName: "ShiftWiseReport",
                  moduleDisplayName: "Shift Wise Detail Report",
                  moduleOrders: 1,
                  id: "3-1-7-1",
                  fourthData: [],
                  moduleLink:'MIS/sales/ShiftDetailReport',
                },
                {
                  moduleName: "ShiftWiseSummary",
                  moduleDisplayName: "Shift Wise Summary Report",
                  moduleOrders: 2,
                  id: "3-1-7-2",
                  fourthData: [],
                  moduleLink:'MIS/sales/shiftsummaryreport',
                },
              ],
            },
          ],
        },
        {
          moduleName: "ReceiveFuelReports",
          moduleDisplayName: "Receive Fuel Reports",
          moduleOrders: 2,
          id: "3-2",
          secondData: [],
          moduleLink:'MIS/receivefuelreports'
        },
        {
          moduleName: "ReconcilliatonReport",
          moduleDisplayName: "Reconciliation Report",
          moduleOrders: 3,
          id: "3-3",
          secondData: [],
          moduleLink:'MIS/reconciliation'
        },
      ],
    },
    {
      moduleName: "generalsettings",
      moduleDisplayName: "General Settings",
      moduleOrders: 99,
      Icon: rec,
      id: "4",
      firstData: [
        {
          moduleName: "countrystatedistrict",
          moduleDisplayName: "Country, State & District",
          moduleOrders: 1,
          id: "4-1",
          secondData: [
            {
              moduleName: "Countrylisting",
              moduleDisplayName: "Country Listing",
              moduleOrders: 1,
              id: "4-1-1",
              thirdData: [],
              moduleLink:'generalsetting/countrylist',
            },
            {
              moduleName: "Statelisting",
              moduleDisplayName: "State Listing",
              moduleOrders: 2,
              id: "4-1-2",
              thirdData: [],
              moduleLink:'generalsetting/statelist',
            },
            {
              moduleName: "Districtlisting",
              moduleDisplayName: "District Listing",
              moduleOrders: 3,
              id: "4-1-3",
              thirdData: [],
              moduleLink:'generalsetting/districtlist',
            },
          ],
        },
        {
          moduleName: "oilcompany",
          moduleDisplayName: "Oil Company",
          moduleOrders: 2,
          id: "4-2",
          secondData: [
            {
              moduleName: "Oilcompanylisting",
              moduleDisplayName: "Oil Company Listing",
              moduleOrders: 1,
              id: "4-2-1",
              thirdData: [],
              moduleLink:'generalsetting/oilcompany/oilcompanylist',
            },
          ],
        },
        {
          moduleName: "product",
          moduleDisplayName: "Product",
          moduleOrders: 3,
          id: "4-3",
          secondData: [
            {
              moduleName: "Productfamilylisting",
              moduleDisplayName: "Product Family",
              moduleOrders: 1,
              id: "4-3-1",
              thirdData: [],
              moduleLink:'generalsetting/product/productfamilylist',
            },
            {
              moduleName: "Productlisting",
              moduleDisplayName: "Product Listing",
              moduleOrders: 2,
              id: "4-3-2",
              thirdData: [],
              moduleLink:'generalsetting/product/productlist',
            },
          ],
        },
        {
          moduleName: "device",
          moduleDisplayName: "Devices",
          moduleOrders: 4,
          id: "4-4",
          secondData: [
            {
              moduleName: "devicemasterlisting",
              moduleDisplayName: "Device Master Listing",
              moduleOrders: 1,
              id: "4-4-1",
              thirdData: [],
              moduleLink:'generalsetting/device/devicemasterlist',
            },
            {
              moduleName: "devicemakelisting",
              moduleDisplayName: "Devices Make Listing",
              moduleOrders: 2,
              id: "4-4-2",
              thirdData: [],
              moduleLink:'generalsetting/device/devicemakelist',
            },
          ],
        },
        {
          moduleName: "protocol",
          moduleDisplayName: "Protocol",
          moduleOrders: 5,
          id: "4-5",
          secondData: [
            {
              moduleName: "protocollisting",
              moduleDisplayName: "Protocol Listing",
              moduleOrders: 1,
              id: "4-5-1",
              thirdData: [],
              moduleLink:'generalsetting/protocol/protocollist',
            },
          ],
        },
        {
          moduleName: "baudrate",
          moduleDisplayName: "Baud Rate",
          moduleOrders: 6,
          id: "4-6",
          secondData: [
            {
              moduleName: "baudratelisting",
              moduleDisplayName: "Baud Rate Listing",
              moduleOrders: 1,
              id: "4-6-1",
              thirdData: [],
              moduleLink:'generalsetting/baudrate/baudratelist',
            },
          ],
        },
      ],
    },
  ];

  export default config